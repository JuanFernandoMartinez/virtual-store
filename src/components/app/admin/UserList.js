import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useState, useEffect} from "react";
import axios from "axios";



export default function UserList(){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios
            .get("https://swapi.dev/api/people")
            .then(res =>{
                console.log(res.data)
                setUsers(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    return <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', elevation: 16 }} className="shadow">

            {users.map(e=> <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AccountCircleIcon></AccountCircleIcon>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={e.name} secondary={e.birth_year} />
            </ListItem>)}

        </List>

}