
import React from 'react';
import EmojiContainer from './components/EmojiContainer';
import Header from './components/Header';
import emojiList from './json/emoji.json'


class App extends React.Component {
  state={
    searchValue:"",
    emojiData: emojiList
  };

  ///custom method
  grabValueFromInput = e => {
    
    let filteredEmoji = this.state.emojiData.filter(item => {
      let inputValue= e.target.value.toLowerCase();
      if (item.title.toLowerCase().includes(inputValue)) {
        return true
      }
      if (item.keywords.toLowerCase().includes(inputValue)) {
        return true
      }
      return false;
    })


    this.setState({
      searchValue: e.target.value,
      emojiData: filteredEmoji
    })
  }
  render() {
    console.log('render in app', this.state.searchValue);

    return (
      <div style={{margin:"0", padding:"0", boxSizing:"border-box"}} className="App" style={{backgroundColor:"#EAEDF0"}}>
        
        <Header />
  
        <div style={{display:"flex", justifyContent:"center"}}>
          <input type="text" style={{fontSize:"16px", width:"400px", padding:"5px", marginBottom:"5px", borderRadius:"5px", border:"1px solid light-gray"}} onChange={this.grabValueFromInput}/>
        </div>

        <EmojiContainer emojiData={this.state.emojiData}/>
      </div>
    );
  }
}



export default App;