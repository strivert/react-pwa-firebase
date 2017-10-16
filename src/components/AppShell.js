import React, {Component} from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { AppBar, Drawer, MenuItem } from 'material-ui';

class AppShell extends Component {
 	render() {
 		return (
 			<MuiThemeProvider>
		 		<div>
		 			<AppBar />
		 			<Drawer>
		 				<MenuItem primaryText={'Home'} />
		 			</Drawer>
		 			<div id="content">
		 				{React.cloneElement(this.props.children)}
		 			</div>
		 		</div>
		 	</MuiThemeProvider>
	 	);
 	}
 }

export default AppShell;