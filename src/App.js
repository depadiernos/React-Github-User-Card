import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import searchIcon from "components/search.png";
import UserCard from "components/UserCard";
import FollowersList from "components/FollowersList";
import FollowerCard from "components/FollowerCard";

const Style = styled.div`
  box-sizing: border-box;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    margin: 1rem;
    input {
      height: 2rem;
      font-size: 1.2rem;
      padding-left: 0.5rem;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 2rem;
      }
    }
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: "depadiernos",
      submitting: false,
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.submitting !== this.state.submitting) {
      this.fetchUser();
      this.setState({ submitting: false });
    }
    if (prevState.user !== this.state.user) {
      this.fetchFollowers();
    }
  }
  fetchUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(result => {
        this.setState({
          user: result.data
        });
      })
      .catch(error => {
        console.log("error:", error);
      });
  };

  fetchFollowers = () => {
    axios
      .get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then(result => {
        this.setState({
          followers: result.data
        });
      })
      .catch(error => {
        console.log("error:", error);
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitting: true });
  };

  handleChange = event => {
    this.setState({ currentUser: event.target.value });
  };

  handleFollowerClick = follower => {
    this.setState({ currentUser: follower, submitting: true });
  };

  render() {
    return (
      <Style>
        <h1>Enter A GitHub Username:</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.currentUser}
            onChange={event => this.handleChange(event)}
          />
          <button>
            <img src={searchIcon} alt="search" />
          </button>
        </form>
        <UserCard user={this.state.user}>
          <FollowersList>
            {this.state.followers.map(follower => (
              <FollowerCard
                key={follower.id}
                follower={follower}
                onClick={() => this.handleFollowerClick(follower.login)}
              />
            ))}
          </FollowersList>
        </UserCard>
      </Style>
    );
  }
}

export default App;
