import React from 'react';
import { Icon, Modal, Button, Select, Input, Form } from 'antd';

import { Dialogs } from 'containers';
// import { Avatar } from 'components';


const { Option } = Select;
const { TextArea } = Input;

const Sidebar = ({
    users,
    user,
    isVisible,
    onShow,
    onClose,
    onChangeInput,
    onSelectUser,
    inputValue,
    isSearching,
    onSearch,
    onModalOk,
    onTextAreaChange,
    messageText,
}) => {
    const options = users.map(user => <Option key={user._id} style={{display: 'flex', alignItems: 'center'}}>
        {/* <Avatar style={{
            width: '30px',
            height: '30px',
            fontSize: '14px',
            marginRight: '5px'
        }}
        user={user}/> */}
        {user.fullname}
        <span style={{
            color: 'lightgray',
            marginLeft: 5
        }}>
            {user.email}
        </span>
        </Option>);
    
    return (
    <div className="chat__sidebar">
        <div className="chat__sidebar-header">
            <div>
                <Icon type="team" style={{color: 'rgba(0, 0, 0, .6)'}}/>
                <span>
                    Dialogs List
                </span>
            </div>
            <Button
                onClick={onShow}
                type='link'
                shape='circle'
                icon='form'
                style={{color: 'rgba(0, 0, 0, .6)'}}/>
            <Modal
                visible={isVisible}
                title='Start new dialog'
                onClose={onClose}
                footer={[
                    <Button key='back' onClick={onClose}>
                        Cancel
                    </Button>,
                    <Button
                        disabled={!messageText}
                        key='submit'
                        type='primary'
                        loading={isSearching}
                        onClick={onModalOk}>
                        Write!
                    </Button>,
                ]}>
                <Form>
                    <Form.Item label={'Input User\'s name or email'}>
                        <Select
                            value={inputValue}
                            onChange={onChangeInput}
                            onSearch={onSearch}
                            onSelect={onSelectUser}
                            style={{width: '100%'}}
                            placeholder='Find user by name or email'
                            notFoundContent='Nobody found :('
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            showSearch
                            >
                            {options}
                        </Select>
                    </Form.Item>
                    <Form.Item label={'Input your message'}>
                        <TextArea
                            style={{marginTop: 10}}
                            onChange={onTextAreaChange}
                            value={messageText}
                            placeholder="Input your message here"
                            autosize={{
                                minRows: 1,
                                maxRows: 6,
                            }}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
        <div className="chat__sidebar-dialogs">
        <Dialogs
            myId={user && user._id}/>
        </div>
    </div>
    );
};

Sidebar.defaultProps = {
    users: []
};

export default Sidebar;