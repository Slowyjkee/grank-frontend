import React, {useState} from 'react'
import {Table} from "rsuite";
import {translateKeyword} from "../../utils/translateKeyword";
const { Column, HeaderCell, Cell, Pagination } = Table;

export const ReusableTable = (props) => {
    const {
        data,
        keys,
        onRemove,
        onUpdate
    } = props;

    async function onRemoveAction(data, index) {
        try {
            await onRemove(data._id, index)
        }catch (e) {

        }
    }
    const Columns = keys.map(key =>  {

        return (
            <Column width={200} >
                <HeaderCell>{translateKeyword(key)}</HeaderCell>
                <Cell dataKey={key} />
            </Column>
        )
    });
    return (
        <Table
            autoHeight
            data={data}
            onRowClick={data => {
                console.log(data);
            }}
        >
            {Columns}
            <Column width={300} fixed="right">
                <HeaderCell>Action</HeaderCell>
                <Cell>
                    {(rowData, rowIndex) => {
                        function handleAction(action) {
                           action === 'remove' ? onRemoveAction(rowData, rowIndex)  :  onUpdate(rowData._id, rowIndex)
                        }
                        return (
                            <span>
                    <a onClick={() => handleAction('delete')}> Редактировать </a> |{' '}
                    <a onClick={() => handleAction('remove')    }> Удалить </a>
                  </span>
                        );
                    }}
                </Cell>
            </Column>
        </Table>
    );
};
