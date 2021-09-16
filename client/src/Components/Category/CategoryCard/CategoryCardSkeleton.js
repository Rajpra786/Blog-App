import React,{useContext} from 'react';
import { useTheme} from '@mui/material/styles';
import { ThemeContext } from '../../Context/ThemeContext';
// material-ui
import { Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Skeleton } from '@mui/material';

const CategoryCard = props => {
	const theme = useTheme();
	const {toggleTheme} = useContext(ThemeContext);
	console.log(theme);
	return  <div>
		<Card sx={{width:'200px'}}>
				<CardContent sx={{padding: '16px !important'}}>
					<List sx={{paddingTop: 0,paddingBottom: 0}}>
						<ListItem alignItems="center" disableGutters sx={{paddingTop: 0,paddingBottom: 0}}>
							<ListItemAvatar>
								<Skeleton variant="rect" width={44} height={44} />
							</ListItemAvatar>
							<ListItemText
								sx={{paddingTop: 0,paddingBottom: 0}}
								primary={<Skeleton variant="rect" height={20} />}
								secondary={<Skeleton variant="text" />}
							/>
						</ListItem>
					</List>
				</CardContent>
			</Card>
			<button onClick={toggleTheme}></button>
	</div>
}


export default CategoryCard;
