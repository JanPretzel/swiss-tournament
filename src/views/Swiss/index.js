import React from 'react';
import ReactDOM from 'react-dom';
import { withTheme } from 'styled-components';

import { SwissContainer, RoundContainer, SvgContainer, Line } from './styles';
import { Bucket } from '../../components';

const calculateCenterOfRef = (ref, theme) => {
  const domNode = ReactDOM.findDOMNode(ref.current);

  if (domNode) {
    const domRect = domNode.getBoundingClientRect();

    const matchCount = ref.current.props.matches.length || 0;
    const height = matchCount * theme.matchHeight + (matchCount - 1) * theme.matchPadding + theme.bucketPadding;

    return {
      x: domRect.x + domRect.width / 2,
      y: domRect.y + height / 2,
    };
  }

  return { x: 0, y: 0 };
};

class Swiss extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      connections: [],
    };

    this.bucketIds = {
      round1Bucket1: 'round1Bucket1',
      round2Bucket1: 'round2Bucket1',
      round2Bucket2: 'round2Bucket2',
    };

    this.bucketRefs = {
      [this.bucketIds.round1Bucket1]: React.createRef(),
      [this.bucketIds.round2Bucket1]: React.createRef(),
      [this.bucketIds.round2Bucket2]: React.createRef(),
    };

    this.bucketCenters = {};
  }

  calculateBucketCenters = () => {
    const { theme } = this.props;
    return Object.keys(this.bucketIds).reduce((acc, bucket) => {
      acc[bucket] = calculateCenterOfRef(this.bucketRefs[bucket], theme);
      return acc;
    }, {});
  };

  collectConnections = () => {
    this.bucketCenters = this.calculateBucketCenters();

    const connections = [
      {
        from: this.bucketCenters[this.bucketIds.round1Bucket1],
        to: this.bucketCenters[this.bucketIds.round2Bucket1],
      },
      {
        from: this.bucketCenters[this.bucketIds.round1Bucket1],
        to: this.bucketCenters[this.bucketIds.round2Bucket2],
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
          <Bucket
            ref={this.bucketRefs[this.bucketIds.round1Bucket1]}
            matches={[
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
                score: '16:14',
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
                score: '16:14',
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
                score: '16:14',
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
                score: '16:14',
              },
            ]}
          />
        </RoundContainer>
        <RoundContainer>
          <Bucket
            ref={this.bucketRefs[this.bucketIds.round2Bucket1]}
            matches={[
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
                score: '16:14',
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
                score: '16:14',
              },
            ]}
          />
          <Bucket
            ref={this.bucketRefs[this.bucketIds.round2Bucket2]}
            matches={[
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
                score: '16:14',
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
              },
              {
                team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
                team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
                score: '16:14',
              },
            ]}
          />
        </RoundContainer>
        {this.renderConnections()}
      </SwissContainer>
    );
  }
}

export default withTheme(Swiss);
