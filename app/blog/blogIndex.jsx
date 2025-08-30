import {NavLink} from "react-router-dom"

export function Indexblog(){
    return(
        <div id="blog" className="Blog">
            <div className="blogdes">
                <NavLink to="blogpost/Network Address Translation" className="linkpost">
                     Network Address Translation (NAT)
                </NavLink>   
                <div className="short">
                    Network Address Translation (NAT) is a fundamental concept in modern networking that
                    enables multiple devices on a private network to share a single public IP address when accessing the internet.
                    This technique has become a crucial component of network design, allowing organizations to conserve 
                    IP addresses, enhance security, and improve network scalability.
                </div>                    
            </div>
            <div className="blogdes">
                <NavLink to="blogpost/Principle of Softwares" className="linkpost">
                      10 Principles of Software Architecture:Building Robust Systems
                </NavLink>
                <div className="short">
                     Software architecture is the backbone of any successful software project.
                     It provides a blueprint for the design and development of software systems, ensuring they 
                     meet the required standards of performance, scalability, and maintainability.
                </div>
                        
            </div>
            
            <div className="blogdes">
                <NavLink  to="blogpost/Postgresql mistakes" className="linkpost">
                     Some Mistakes PostgreSQL Users Make During Deployment
                </NavLink>
                <div className="short">  
                    Software architecture is the backbone of any successful software project.
                    PostgreSQL is a powerful and popular open-source database management system that offers a wide
                    range of features and tools to manage and analyze data. However, deploying a PostgreSQL database
                    can be a complex process, and users often make mistakes that can lead to performance issues, 
                    data loss, and security vulnerabilities.
                </div> 
                
            </div>
            <div className="blogdes">
                <NavLink to="blogpost/PAM authentication" className="linkpost">
                   An Introduction to PAM Authentication Models
                </NavLink>
                <div className="short">  
                    Software architecture is the backbone of any successful software project.
                    Pluggable Authentication Modules (PAM) is a widely used framework that allows system administrators to 
                    integrate multiple authentication technologies into a single, flexible system.
                </div>
            
            </div>
        </div>
    )
}