import React,{useContext} from 'react';
import { useTheme} from '@mui/material/styles';
import { ThemeContext } from '../../Context/ThemeContext';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography,Avatar} from '@mui/material';

const SmallBlogCard = (props) =>{
	const theme = useTheme();
	const {toggleTheme} = useContext(ThemeContext);
	return  <div>
            <Card sx={{
                        width:'20rem',
                        overflow: 'hidden',
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            width: '210px',
                            height: '210px',
                            background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
                            borderRadius: '50%',
                            top: '-30px',
                            right: '-180px'
                        },
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            width: '210px',
                            height: '210px',
                            background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
                            borderRadius: '50%',
                            top: '-160px',
                            right: '-130px'
                        }
            }}
            
            >
                <CardContent sx={{padding: '16px !important'}}>
                    <List sx={{paddingTop: 0,paddingBottom: 0}}>
                        <ListItem alignItems="center" disableGutters sx={{paddingTop: 0,paddingBottom: 0}}>
                            <ListItemAvatar>
                                <Avatar variant="rounded"
                                    sx ={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: theme.palette.primary[800],
                                            color: '#fff'
                                        }}>
                                    <AddBusinessIcon fontSize="inherit" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                sx={{paddingTop: 0,paddingBottom: 0,mt: 0.45,mb: 0.45}}
                                primary={
                                    <Typography variant="h6">
                                        Energy & Enviornment
                                    </Typography>
                                }
                                // secondary={
                                //     <Typography variant="subtitle2" sx={{color: theme.palette.primary.light,marginTop: '5px'}}>
                                //         Total Income
                                //     </Typography>
                                // }
                            />
                        </ListItem>
                    </List> 
                </CardContent>
            </Card>
			<button onClick={toggleTheme}></button>
	</div>
} 

export default SmallBlogCard;
