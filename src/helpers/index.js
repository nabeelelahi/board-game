import { Modal } from "antd";

// this method renders alert modal
export const showPopModal = (
    type = 'success',
    message = "Success",
    description = "Success",
    callBack = () => { }
) => {
    const modal = Modal[type]
    modal({
        title: message,
        content: (
            <div>
                <p>{description}</p>
            </div>
        ),
        callBack,
    });
};