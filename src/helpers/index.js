import { Modal } from "antd";

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

export const jsonToForm = (obj = {}) => {
    let form = new FormData();
    Object.entries(obj).map(([key, value]) => {
        form.append(key, value)
    })
    return obj
}