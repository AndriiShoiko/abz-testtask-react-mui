export const validateSelectFile = (value) => {

    if (value.length > 0) {
        window.URL = window.URL || window.webkitURL;

        const selectImg = new Image();
        selectImg.src = window.URL.createObjectURL(value[0]);

        selectImg.onload = async () => {
            const width = selectImg.width;
            const height = selectImg.height;
            let size = 0;

            if (value.length > 0) {
                size = value[0].size / 1024;
            }
            window.URL.revokeObjectURL(selectImg.src);

            const result = size <= 5120 && width >= 70 && height >= 70;
            return result;
        }
    } else {
        return false;
    }
}