import { TextField, Button, Stack } from "@mui/material";

import React from "react";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        buttonUploadFile: {
            border: "1px solid rgba(0, 0, 0, 0.87)",
            borderRadius: "4px 0px 0px 4px",
            fontFamily: "Nunito",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "26px",
            textTransform: "none",
            color: "#000000de",
            "&:hover": {
                backgroundColor: "#F8F8F8",
                boxShadow: "none",
                borderColor: "rgba(0, 0, 0, 0.87)",
            },
            "&.Mui-focusVisible": {
                backgroundColor: "#F8F8F8",
                boxShadow: "none",
                border: "2px solid",
                borderColor: "rgba(0, 0, 0, 0.87)",
            },
        },
        textField: {
            backgroundColor: "#F8F8F8",
            borderColor: "#D0CFCF",
            color: "#000000de",
            fontFamily: "Nunito",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "26px",
            '& .MuiOutlinedInput-root': {
                borderRadius: "0px 4px 4px 0px",
                '&:hover fieldset': {
                    borderColor: "#D0CFCF",
                },
                '&.Mui-focused fieldset': {
                    borderColor: "#D0CFCF",
                    borderLeftStyle: "none",
                },
                '&.Mui-error fieldset': {
                    borderColor: "#CB3D40",
                    borderLeftStyle: "none",
                },
            }
        },
    };
});

export const FileUpload = ({ error, ...props }) => {

    const { ref, ...allRegister } = props.register;

    const { classes } = useStyles();

    const selectFileRef = React.useRef(null);
    const [selectFile, setSelectFile] = React.useState("");
    const [labelText, setLabelText] = React.useState("Upload your photo");

    const selectFileHandler = () => {
        if (selectFileRef.current.files.length > 0) {
            setSelectFile(selectFileRef.current.files[0].name);
            setLabelText("");
        } else {
            setSelectFile("");
            setLabelText("Upload your photo");
        }
    }

    return (
        <Stack direction="row" width="100%" spacing={0}>
            <Button variant="outlined" component="label" width="100px"
                className={classes.buttonUploadFile} style={error ? { borderColor: "#CB3D40" } : {}}
                onChange={selectFileHandler}>
                Upload
                <input hidden accept="image/*" multiple type="file"
                    ref={(e) => {
                        ref(e);
                        selectFileRef.current = e;
                    }}
                    {...allRegister} error={error ? "true" : "false"} />
            </Button>
            <TextField className={classes.textField} fullWidth readOnly value={selectFile} error={error} disabled label={labelText} />
        </Stack>
    )
}
