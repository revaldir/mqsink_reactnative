import { showMessage } from "react-native-flash-message"

export const showError = (message) => {
    showMessage({
        message: message,
        type: 'danger'
    });
}
