import React, { useRef } from 'react'
import { Modal, Input, notification, Button } from 'antd';

// This modal ask for the name of players before game begins
function NameModal({ isModalOpen, setIsModalOpen, setName, name, createCounter }) {

    // getting reference of input to avoid re-renders
    const inputRef = useRef()

    // on submission of name
    function handleOk() {
        let inputValue = inputRef.current.input.value;
        if (inputValue.length) {
            setName(inputValue)
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
            <Input ref={inputRef} />
        </Modal>
    );
};
export default React.memo(NameModal);