var my_news = [
  {
    author: 'Sasha',
    text: 'Ei patsan',
	qty: 1,
	bigText: "Saha this is fucking big text"
	
  },
  {
    author: 'Vasya',
    text: 'Che smotrish?',
	qty: 2,
	bigText: "Chre striiike this is fucking big text"
  },
  {
    author: 'Kisa',
	text: 'Govno',
	bigText: "Kisa this is fucking big text"
  }
];

var Article = React.createClass(
{
	propTypes: {
		data: React.PropTypes.shape({
		  author: React.PropTypes.string.isRequired,
		  text: React.PropTypes.string.isRequired,
		  qty: React.PropTypes.number
		})
	},
	render: function() {
		var data = this.props.data;
		var state = this.state;
		return (<div className='article'>
			<p className='news__author'>{data.author}</p>
			<p className='news__text'>{data.text}</p>					
			<a href="#" onClick={this.readMore}>Read more</a>
			<p className={'news__text '+(state.visible ? '':'none')}>{data.bigText}</p>					
		</div>);
	},
	getInitialState: function() {
		return{
			visible: false,
			status: "govno"
		};
		
	},
	
	readMore: function(e) {
		e.preventDefault();
		this.setState({
			visible:true,
			status: "visibleGovno"
		}, function() {
			alert('The button has been clicked!');
		});
	}
	
}
);

var News = React.createClass({
	render: function() {
		var data = this.props.data
		var newsTemplate = data ? data.map(function(item, index) {
					return (
						<div key={index}>
							<Article data = {item}/>
						</div>
					);
				}):<p>No news unfortunately</p>;
		console.log(newsTemplate);
		return (
		
			<div className='news'>
				{newsTemplate}
				<strong className={'news__count ' + (data.length > 0 ? '':'none')}>Overall news: {data.length}</strong>
			</div>
		);
	}
});

var Comments = React.createClass({
	render: function() {
		return(
			<div>
				No comments = go agead
			</div>
		);
	}
});

var App = React.createClass(
{
	render: function() {
		return (
		<div className="app">
			<h3>Zdrasti, I am an App!</h3>
			<News data={my_news}/> {/*Suka kament govno*/}
			<Comments/>
		</div>
		);
	}
}
);

ReactDOM.render(
<App/>,
document.getElementById("root")
);

