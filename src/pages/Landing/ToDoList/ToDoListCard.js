import React from 'react';
import { Card, Popover } from 'antd';
import check from 'Assets/check.png';
import more from 'Assets/more.svg';
import share from 'Assets/share.png';

const content = (
    <div className="pop-content">
        <span>
            Share with Co-parent
            <span className="img-wrap">
                <img src={share} alt="share-icon" />
            </span>
        </span>
    </div>
);

const ListCard = (props) => {
    return (
        <Card bordered={false} className="list-card">
            <div className="list-inner">
                <div className="list-date">
                    <span>1</span>
                    <span>Fri, Feb</span>
                </div>
                <div className="list-time">
                    <span>{props.time}</span>
                </div>
                <div className="list-task">
                    <span>{props.activity}</span>
                </div>
                <div className="list-check">
                    <img src={check} alt="check-icon" />
                </div>
                <div className="list-more">
                    <Popover placement="topLeft" content={content} trigger="click">
                        <img src={more} alt="more-icon" />
                    </Popover>
                </div>
            </div>
        </Card>
    );
};
// class ListCard extends Component {
//     render() {}
// }

export default ListCard;
