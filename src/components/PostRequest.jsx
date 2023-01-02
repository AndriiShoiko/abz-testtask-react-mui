import { Typography, Container, Box, Stack, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from "@mui/material";
import { makeStyles } from 'tss-react/mui';

import { Button } from "../ui/Button";
import { FileUpload } from "../ui/FileUpload";

import { emailPattern, phonePattern } from "../utils/validate/patterns";
import { validateSelectFile } from "../utils/validate/functions";

import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { addUser, userAddedSelector } from "../store/slices/usersSlice";

import successSvg from "../assets/success-image.svg";

const useStyles = makeStyles()((theme) => {
  return {
    formContainer: {
      width: "380px",
      [theme.breakpoints.down("sm")]: {
        width: "328px",
      },
    },
    textField: {
      backgroundColor: theme.palette.common.lightGray,
      borderColor: "#D0CFCF",
      borderRadius: "4px",
      fontFamily: "Nunito",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "26px",
      '& label.Mui-focused': {
        color: "#7E7E7E",
      },
      '& label.Mui-error': {
        color: theme.palette.common.error,
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: "#D0CFCF",
        },
        '&.Mui-focused fieldset': {
          borderColor: "#D0CFCF",
        },
        '&.Mui-error fieldset': {
          borderColor: theme.palette.common.error,
        },
      },
      "& .MuiFormHelperText-root": {
        color: "#7E7E7E",
        fontFamily: "Nunito",
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: "14px",
        '&.Mui-error': {
          color: theme.palette.common.error,
        }
      }
    },
    radio: {
      color: theme.palette.common.blue,
      '&.Mui-checked': {
        color: theme.palette.common.blue,
      },
    },
    radioLabel: {
      color: "#000000de",
      "&.Mui-focused": {
        color: "#000000de",
      },
      marginBottom: "11px"
    },
    successImg: {
      width: "328px",
      height: "290px",
      marginBottom: "50px"
    }
  };
});

export const PostRequest = ({ refProp }) => {

  const { classes } = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();
  const userAdded = useSelector(state => userAddedSelector(state));

  const onSubmit = (data) => {

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.mail);
    formData.append("phone", data.phone);
    formData.append("position_id", Number(data.position));
    formData.append("photo", data.selectPhoto[0]);

    dispatch(addUser(formData));
  };

  const newUserPage = () => {
    return (
      <form width="100%" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6} marginBottom="43px">
          <TextField label="Your name" variant="outlined" fullWidth
            className={classes.textField} {...register("name", { required: true, minLength: 2, maxLength: 60 })} error={errors.name ? true : false} />
          <TextField label="Email" variant="outlined" fullWidth
            className={classes.textField}
            {...register("mail", {
              required: true, minLength: 2, maxLength: 100,
              pattern: emailPattern
            })
            }
            error={errors.mail ? true : false} />
          <TextField label="Phone" helperText="+38 (XXX) XXX - XX - XX" variant="outlined" fullWidth
            className={classes.textField} {...register("phone", { required: true, pattern: phonePattern })} error={errors.phone ? true : false} />
        </Stack>

        <Box marginBottom="50px">
          <FormControl>
            <FormLabel id="select-your-position" className={classes.radioLabel}>Select your position</FormLabel>
            <RadioGroup
              aria-labelledby="select-your-position"
              defaultValue={1}
              name="radio-buttons-group"
            >
              <FormControlLabel value={1} control={<Radio size="small" className={classes.radio} {...register("position")} />} label="Lawyer" />
              <FormControlLabel value={2} control={<Radio size="small" className={classes.radio} {...register("position")} />} label="Content manager" />
              <FormControlLabel value={3} control={<Radio size="small" className={classes.radio} {...register("position")} />} label="Security" />
              <FormControlLabel value={4} control={<Radio size="small" className={classes.radio} {...register("position")} />} label="Designer" />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box marginBottom="50px">
          <FileUpload
            register={
              register("selectPhoto", {
                validate: validateSelectFile
              }
              )
            }
            error={errors.selectPhoto ? true : false} />
        </Box>

        <Box display="flex" justifyContent="center" marginBottom="50px">
          <Button type='submit' disabled={!isValid}>Sign Up</Button>
        </Box>

      </form>
    )
  }

  const addedUser = () => {
    return (
      <Box width="100%">
        <img src={successSvg} alt="success" className={classes.successImg} />
      </Box>
    )
  }

  return (
    <Box width="100%" component="section" ref={refProp}>
      <Typography variant="h1" align="center" marginBottom="50px">
        {userAdded ? "User successfully registered" : "Working with POST request"}
      </Typography>
      <Container className={classes.formContainer} disableGutters>
        {
          userAdded ? addedUser() : newUserPage()
        }
      </Container>
    </Box>
  )
}

