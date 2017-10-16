import React, {Component} from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { AppBar, Drawer, MenuItem } from 'material-ui';

class AppShell extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	handleDrawerToggle = () => {
		this.setState({
			open: !this.state.open
		});
	}

	handleRequestChange = (open) => {
		this.setState({
			open: open
		}); 
	}

 	render() {
 		return (
 			<MuiThemeProvider>
		 		<div>
		 			<AppBar onLeftIconButtonTouchTap={this.handleDrawerToggle} />
		 			<Drawer open={this.state.open} docked={false}
		 				onRequestChange={this.handleRequestChange}>
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