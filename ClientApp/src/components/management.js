import React from 'react';
import ReactTable from '@kavience/react-table';

const columns: any[] = [
    {
        title: 'Name',
        align: 'center',
        width: 120,
        ellipsis: true,
        dataIndex: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age'
    },
    {
        title: 'Height',
        dataIndex: 'height'
    },
    {
        title: 'Weight',
        dataIndex: 'weight'
    }
];

const EasyUse = () => {
    const dataSource = [
        {
            id: 1,
            name:
                'kevinkevinkevinkevinkevikevinkevinkevinkevinkevinkevinkevinkevinkevinkevinn',
            age: 28,
            height: '168cm',
            weight: '75kg'
        },
        {
            id: 2,
            name: 'kevin2',
            age: 28,
            height: '168cm',
            weight: '75kg'
        },
        {
            id: 3,
            name: 'kevin3',
            age: 28,
            height: '168cm',
            weight: '75kg'
        }
    ];

    return (
        <div>
            <h2>Use React Table Simply</h2>
            <ReactTable
                size="mini"
                bordered
                rowKey="id"
                columns={columns}
                dataSource={dataSource}
            />
        </div>
    );
};

export default EasyUse;