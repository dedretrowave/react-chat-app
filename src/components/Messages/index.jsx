import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Icon, Modal } from 'antd';
import classNames from 'classnames';

import { Message } from '../';

import './Messages.scss';

const Messages = ({
    onRemoveMessage,
    baseRef,
    isLoading,
    items,
    myId,
    user,
    previewImage,
    setPreviewImage,
}) => {
    return  <div
        ref={baseRef}
        className={classNames("messages", {
            'messages--loading': isLoading
        })}>
        {
            isLoading || !user ?
            (<Icon type="loading" spin />)
            : !items || !items.length ? <Empty description="Select dialog to start messaging or start new dialog by pressing button right to Dialogs List"/>
            : (<div className='messages-wrapper'>
                {items.map(item =>
                    <Message
                        onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                        setPreviewImage={setPreviewImage}
                        key={Math.random()}
                        {...item}
                        isMe={item.user._id === myId}/>
                )}</div>)
    }
    <Modal visible={!!previewImage} onCancel={() => setPreviewImage(null)} footer={null}>
        <img src={previewImage} style={{width: '100%'}} alt="Preview"/>
    </Modal>
    </div>
};

Messages.propTypes = {
    items: PropTypes.array,
};

export default Messages;