import React from 'react'
import { Modal, Input, notification, Button } from 'antd';

// This modal ask for the name of players before game begins
function NameModal({ isModalOpen, setIsModalOpen, setName, name, createCounter }) {

    // on submission of name
    function handleOk() {
        if (name.length) {
            setIsModalOpen(false)
            createCounter()
        }
        else {
            notification.warning({
                message: 'Name is required.',
                description: 'Kindly enter your name before starting your game.',
            });
        }
    }

    return (
        <Modal
            title="Please enter your name."
            open={isModalOpen}
            footer={[
                <Button
                    key="submit"
                    type="primary"
                    onClick={handleOk}
                >
                    Submit
                </Button>,
            ]}
        >
            <Input onChange={(e) => setName(e.target.value)} />
        </Modal>
    );
};
export default React.memo(NameModal);