import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import "./UserList.css";
import {
  getUsers,
  onNameChange,
  onSurnameChange,
  getToken,
  updateUser
} from "./UserList.action";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getUsers();
    this.props.getToken();
  }
  render() {
    const {
      userList,
      loading,
      isError,
      onNameChange,
      onSurnameChange,
      updateUser
    } = this.props;
    if (loading && !isError) {
      return <div>loading</div>;
    }
    if (!loading && isError) {
      return <div>Error</div>;
    }
    return (
      <Fragment>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Schema Task
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <Table className="tableContainer">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Object.keys(userList).map(userId => {
              const user = userList[userId];
              return (
                <TableRow key={user.Id}>
                  <TableCell>
                    <input
                      value={`${user.Name}`}
                      onChange={e => {
                        onNameChange(e.target.value, user.Id);
                      }}
                      onBlur={() => {
                        if (user.Name !== user.name_bak) {
                          updateUser(user.Id, user.Name, user.Surname);
                          console.log("make an api call", user.Name);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <input
                      value={`${user.Surname}`}
                      onChange={e => {
                        onSurnameChange(e.target.value, user.Id);
                      }}
                      onBlur={() => {
                        if (user.Surname !== user.surname_bak) {
                          updateUser(user.Id, user.Name, user.Surname);

                          console.log("make an api call", user.Surname);
                        }
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    userList: state.users.userList,
    loading: state.users.loading,
    isError: state.users.isError
  };
};
export default connect(
  mapStateToProps,
  { getUsers, onNameChange, onSurnameChange, getToken, updateUser }
)(UserList);
