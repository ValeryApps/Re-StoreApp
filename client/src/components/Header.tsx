import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
interface Props {
    checked: boolean | undefined;
    onChange: () => void
}

const Header = ({ checked, onChange }: Props) => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Switch checked={checked} onChange={onChange} />
                <Typography>
                    RE-STORE
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header