import React from 'react'

export const Signup = () => {
    return (
        <div className="container  p-3" id="login">
             <form>
                <div class="form-group">
                    <label HTMLfor="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                    
                </div>
                <div class="form-group">
                    <label HTMLfor="password">Password</label>
                    <input type="password" class="form-control" id="password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
       
       
    )
}

export default Signup