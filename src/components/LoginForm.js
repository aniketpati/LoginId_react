import React from 'react'

export const LoginForm = () => {
  return (
    <form>
        <div className='form-inner'>
            <h2>Login</h2>
            {/*ERROR!*/}
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="countryid">CountryID</label>
                <input type="countryid" name="countryid" id="countryid"/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id="password"/>
                <input type="submit" value="LOGIN" />
            </div>
        </div>
    </form>
  )
}
