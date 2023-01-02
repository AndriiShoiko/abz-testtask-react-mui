import { forwardRef, useState } from "react";
import { Alert as MuiAlert, Snackbar } from '@mui/material';

const Alert = forwardRef(
    (props, ref) => {
        return (
            <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
        )
    }
);

export const ShowError = ({ textError }) => {

    const [visible, setVisible] = useState(true);

    return (
        <Snackbar open={visible} autoHideDuration={6000} onClose={() => setVisible(false)}>
            <Alert severity="error" onClose={() => setVisible(false)} style={{ width: '100%' }}>
                {textError}
            </Alert>
        </Snackbar>
    )

}