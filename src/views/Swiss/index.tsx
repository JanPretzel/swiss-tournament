import React, { RefObject } from 'react';
import ReactDOM from 'react-dom';
import { withTheme, ThemeProps } from 'styled-components';

import { SwissContainer, RoundContainer, SvgContainer, Line } from './styles';
import { Bucket } from '../../components';
import data from '../../mock';
import { NormalizedMatch } from '../../types';
import { Theme } from '../../theme';
import { BucketCoordinates, Connection } from './types';

const getMatch = (normalizedMatch: NormalizedMatch) => ({
  team1: data.teams[normalizedMatch.team1],
  team2: data.teams[normalizedMatch.team2],
  score: normalizedMatch.score,
});

const getMatches = (normalizedMatches: NormalizedMatch[]) => normalizedMatches.map(match => getMatch(match));

const calculateCenterOfRef = (ref: RefObject<Bucket>, theme: Theme) => {
  const domNode = ReactDOM.findDOMNode(ref.current) as Element;

  if (domNode && ref.current) {
    const domRect = domNode.getBoundingClientRect() as DOMRect;

    const matchCount = ref.current.props.matches.length || 0;
    const height = matchCount * theme.matchHeight + (matchCount - 1) * theme.matchPadding + theme.bucketPadding + 36;

    return {
      x: domRect.x + domRect.width / 2,
      y: domRect.y + height / 2,
    };
  }

  return { x: 0, y: 0 };
};

type Props = ThemeProps<Theme>;

interface State {
  connections: Connection[];
}

class Swiss extends React.Component<Props, State> {
  state: State = {
    connections: [],
  };

  bucketIds = {
    round1Bucket1: 'round1Bucket1',
    round2Bucket1: 'round2Bucket1',
    round2Bucket2: 'round2Bucket2',
    round3Bucket1: 'round3Bucket1',
    round3Bucket2: 'round3Bucket2',
    round3Bucket3: 'round3Bucket3',
  };

  bucketRefs: { [key: string]: RefObject<Bucket> } = {
    [this.bucketIds.round1Bucket1]: React.createRef(),
    [this.bucketIds.round2Bucket1]: React.createRef(),
    [this.bucketIds.round2Bucket2]: React.createRef(),
    [this.bucketIds.round3Bucket1]: React.createRef(),
    [this.bucketIds.round3Bucket2]: React.createRef(),
    [this.bucketIds.round3Bucket3]: React.createRef(),
  };

  bucketCenters: BucketCoordinates = {};

  calculateBucketCenters = () => {
    const { theme } = this.props;
    return Object.keys(this.bucketIds).reduce((acc: BucketCoordinates, bucket) => {
      acc[bucket] = calculateCenterOfRef(this.bucketRefs[bucket], theme);
      return acc;
    }, {});
  };

  collectConnections = () => {
    this.bucketCenters = this.calculateBucketCenters();

    const connections: Connection[] = [
      {
        from: this.bucketCenters[this.bucketIds.round1Bucket1],
        to: this.bucketCenters[this.bucketIds.round2Bucket1],
      },
      {
        from: this.bucketCenters[this.bucketIds.round1Bucket1],
        to: this.bucketCenters[this.bucketIds.round2Bucket2],
      },
      {
        from: this.bucketCenters[this.bucketIds.round2Bucket1],
        to: this.bucketCenters[this.bucketIds.round3Bucket1],
      },
      {
        from: this.bucketCenters[this.bucketIds.round2Bucket1],
        to: this.bucketCenters[this.bucketIds.round3Bucket2],
      },
      {
        from: this.bucketCenters[this.bucketIds.round2Bucket2],
        to: this.bucketCenters[this.bucketIds.round3Bucket2],
      },
      {
        from: this.bucketCenters[this.bucketIds.round2Bucket2],
        to: this.bucketCenters[this.bucketIds.round3Bucket3],
      },
    ];

    this.setState({ connections });
  };

  renderConnections = () => {
    const { connections } = this.state;

    return (
      <SvgContainer>
        <svg width="100%" height="100%">
          {connections.map(connection => (
            <Line x1={connection.from.x} y1={connection.from.y} x2={connection.to.x} y2={connection.to.y} />
          ))}
        </svg>
      </SvgContainer>
    );
  };

  componentDidMount() {
    this.collectConnections();
  }

  render() {
    return (
      <SwissContainer>
        <RoundContainer>
          {data.rounds['1'].buckets && (
            <Bucket
              ref={this.bucketRefs[this.bucketIds.round1Bucket1]}
              matches={getMatches(data.rounds['1'].buckets['1'].matches)}
            />
          )}
        </RoundContainer>
        <RoundContainer>
          {data.rounds['2'].buckets && (
            <>
              <Bucket
                ref={this.bucketRefs[this.bucketIds.round2Bucket1]}
                matches={getMatches(data.rounds['2'].buckets['1'].matches)}
              />
              <Bucket
                ref={this.bucketRefs[this.bucketIds.round2Bucket2]}
                matches={getMatches(data.rounds['2'].buckets['2'].matches)}
              />
            </>
          )}
        </RoundContainer>
        <RoundContainer>
          {data.rounds['3'].buckets && (
            <>
              <Bucket
                ref={this.bucketRefs[this.bucketIds.round3Bucket1]}
                matches={getMatches(data.rounds['3'].buckets['1'].matches)}
              />
              <Bucket
                ref={this.bucketRefs[this.bucketIds.round3Bucket2]}
                matches={getMatches(data.rounds['3'].buckets['2'].matches)}
              />
              <Bucket
                ref={this.bucketRefs[this.bucketIds.round3Bucket3]}
                matches={getMatches(data.rounds['3'].buckets['3'].matches)}
              />
            </>
          )}
        </RoundContainer>
        {this.renderConnections()}
      </SwissContainer>
    );
  }
}

export default withTheme(Swiss);
