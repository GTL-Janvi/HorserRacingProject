import { Card, Row, Table } from 'antd';
import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EVENT_MSG, EVENT_TYPE, formatTime, HORSE_TABLE_COLUMN, ROUTESNAME } from '../../helpers/constants';
import { raceStatus } from '../../store/actions/Race';
import { InitialStateType } from '../../store/reducers/Login';
import { RaceInitialStateType } from '../../store/reducers/Race';
import { HorseDetailTypes } from '../../types/RaceTypes';
import './Race.css';

const Race: FC = () => {
    const dispatch = useDispatch();

    // Get login and race data from store
    const { login } = useSelector((state: InitialStateType) => state);
    const { race } = useSelector((state: RaceInitialStateType) => state);
    const { data } = race;

    // Table columns
    const columns = [
        {
            title: HORSE_TABLE_COLUMN.NO,
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: HORSE_TABLE_COLUMN.HORSE,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: HORSE_TABLE_COLUMN.TIME,
            dataIndex: 'time',
            key: 'time',
            render: (time: number) => (time === 0 ? "" : formatTime(time))
        }
    ];

    useEffect(() => {
        // Call race API
        if (login?.data?.token) {
            dispatch(raceStatus());
        }
    }, [dispatch, login?.data?.token]);

    // Race complition message
    const isEventCompleted = !data.some((item: HorseDetailTypes) => item.eventType === EVENT_TYPE.START);
    return (
        <div className="site-card-border-less-wrapper" id="race-wrapper">
            <Row style={{display: 'flex', alignItems: 'center'}}>
                {data.length > 0 ?
                    <>
                        <Card style={{width: "650px"}} headStyle={{ textAlign: 'center', fontSize: '22px', fontWeight: 600 }} title={ROUTESNAME.RACE.NAME} bordered={false}>
                            {isEventCompleted && <div className="textStyle">{EVENT_MSG.COMPLETE}</div>}
                            <Table id="datatable" rowKey="id" dataSource={data} columns={columns} />
                        </Card>

                    </>
                    :
                    <span>{EVENT_MSG.PENDING}</span>}
            </Row>
        </div>
    )
}

export default Race;