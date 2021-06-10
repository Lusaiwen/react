import React from 'react';
import types from '../../../utils/commomTypes';

export default function WithCheckBoxes(Comp) {
    return class WithCheckBoxes extends React.Component {

        static defaultProps = {
            datas: []
        }

        static propTypes = {
            datas: types.datas.isRequired,
        };

        render() {
            const boxes = this.props.datas.map((item) => <Comp key={item.value} info={item}  {...this.props} />);
            return <>{boxes}</>;
        }
    };
}
