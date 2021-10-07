import React from 'react';
import allBlogs from '../Components/allBlogs'
import Title from '../Components/Title'
function BlogsPage() {
    return (
        <div className="Blog">
            <div className="b-title">
            <Title title ={"Blogs"} span= {'Blogs'}/>

            </div>
            <div className="BlogsPage">
                
                    {
                        allBlogs.map((blog)=>{
                            return (
                                <div className="blog" key={blog.id}>
                                    <div className="blog-content">
                                        <img src={blog.image} alt="img"/>

                                        <a href={blog.link}  className="blog-link">
                                            {blog.title}
                                            </a>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                    
            

            </div>

            
        </div>
    )
}

export default BlogsPage;
