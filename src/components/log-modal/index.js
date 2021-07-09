import React from 'react';
import { Modal, Button } from 'antd';
import closeIcon from '../../assets/images/close.png'
import './index.scss'

export default class LogModalTable extends React.Component {

  handleLogModal = (flag) => {
    this.props.handleLogModal(flag)
  }

  render() {
    const { isModalVisible, title } = this.props
    return (
      <Modal 
        title={title || '日志详情'}
        width={'57.3%'}
        closeIcon={<img alt="" src={closeIcon}></img>}
        className="log-modal"
        footer={[
          <Button key="close" className="close-button" onClick={this.handleLogModal.bind(this, false)}>
            关闭
          </Button>]}
        visible={isModalVisible} onCancel={this.handleLogModal.bind(this, false)}>
      </Modal>
    );
  }
}