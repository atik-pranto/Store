import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

type themeProps = {
    darkMode: boolean;
    onChange: () => void;
}

export default function Header({darkMode, onChange}: themeProps){
    return(
        <AppBar position = 'static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Switch
                    checked={darkMode}
                    onChange={onChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Toolbar>
        </AppBar>

    )
}