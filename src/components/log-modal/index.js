import React from 'react';
import closeIcon from '../../assets/images/close.png'
import './index.scss'
import { Modal, Button, Table } from 'antd';

export default class LogModalTable extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    total: 20,
    dataSource: [
      {
        key: '1',
        name: '1.占位文本\n1.占位文本\n1.占位文本\n1.占位文本\n',
        age: '2021-06-21 14:34:56',
        address: '西湖区湖底公园1号西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: '2021-06-21 14:34:56',
        address: '西湖区湖底公园1号',
      },
    ],
    columns: [{
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        width: '6.88%', 
        render:(text, record, index) => {
          return (<div>{index} </div>)
        }
      },
      {
        title: '操作内容',
        dataIndex: 'name',
        key: 'name',
        width: '60.83%',
        render:(text, record, index) => {
          return (<div className="table-content">
            <pre>{text}</pre>
          </div>)
        }
      },
      {
        title: '操作人',
        dataIndex: 'address',
        key: 'age',
        width: '12.96%',
        render:(text, record, index) => {
          return (<div className="overflow-name" title={text}>
            {text}
          </div>)
        }
      },
      {
        title: '操作时间',
        dataIndex: 'age',
        key: 'address',
        width: '19.33%'
      },
    ]
  }
  handleLogModal = (flag) => {
    this.props.handleLogModal(flag)
  }

  render() {
    const { isModalVisible, title } = this.props
    const { dataSource, columns, total } = this.state
    return (
      <Modal 
        title={title || '日志详情'}
        width={'57.3%'}
        closeIcon={<img src={closeIcon}></img>}
        className="log-modal"
        footer={[
          <Button key="close" className="close-button" onClick={this.handleLogModal.bind(this, false)}>
            关闭
          </Button>]}
        visible={isModalVisible} onCancel={this.handleLogModal.bind(this, false)}>
          <Table 
            className="log-table"
            dataSource={dataSource} columns={columns} 
            pagination={{
              total: total,
              showTotal: (all) => `共${all}条`,
              pageSize: 4
            }}
          >

          </Table>
      </Modal>
    );
  }
}