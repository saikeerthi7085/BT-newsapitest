
import React from 'react'

function Result(props) {
    
        const {Resultdata, isLoading, error } = props.testing;
        return (
          <React.Fragment>
            {error ? <p>{error.message}</p> : null}
           
            {!isLoading ? (
                
              Resultdata.articles.slice(0,10).map((Result,index) => {
                const {author, title,content,url } =  Result;
                return (
                    <div className="card p-3 m-3 body-fontcolor"  key={index}>
                    <div className="card-header">
                           <b>Article Title :</b>  {title}
                    </div>
                    <div className="card-body">
                    <p className="card-text"><b> Author:</b>{author}</p>
                    <p className="card-text"><b>Content:</b>{content}</p>
                    <p className="card-text"><b>URL:</b> <a href={url}>{url}</a></p>
                </div>
            </div>
                  
                );
              })
            // If there is a delay in data, let's let the user know it's loading
            ) : (
              <p className="text-center"></p>
            )}
          </React.Fragment>
        );
      
    
}

export default Result
