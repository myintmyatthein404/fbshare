import React, { Component } from "react";
import { FacebookShareButton, FacebookIcon} from 'react-share';
class App extends Component {
   render() {
   return (
    <div>
        <FacebookShareButton
          url={"https://levelup.gitconnected.com/setting-up-graphql-api-with-mongodb-and-apollo-server-for-a-nextjs-app-cec7a9baedbf"}
        >
          <FacebookIcon/>
        </FacebookShareButton>
    </div>
  )};
}
export default App;