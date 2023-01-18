import React from 'react'
import './css/index.css';

function Profile() {
  return (
    <div className='profile'>
        <div className='wrapper'>
            <div className='info'>
                <div className='profile-image'></div>
                <div className='profile-desc'>
                    <div className='nickname txt-bold'>
                        연수짱
                    </div>
                    {false ?( <div className='quote'>
                            <textarea placeholder='자신의 한줄평을 입력해주세요'></textarea>
                        </div>) : (
                        <>
                        <div className='quote'>
                            sdkfmdsnfkjsbdfkjsdkjfsdf
                            sdkjfskdbfskjdbfksjdfnksjfsd
                            sdkfbskdjbfskjdbfksjdbfskjdbfksjbdfksjbdf
                            sdkjfbsjdbf
                        </div>
                        <div className='follow-btn txt-bold'>
                            팔로우 하기
                        </div>
                        </>
                        )

                    }
                </div>
            </div>
        <div className='feed-images'>
            <div className='feed-image'>
                <img src='http://cdn.shopify.com/s/files/1/0565/7080/6458/collections/marble-geometry-wallpaper-mural.jpg?v=1660198030'></img>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZZQM9hZl1f_6YwCgytaVzZ9nGXzreYLX2znZGsYSeFjfstOL28_-4Ndfq9NLmBLAzPg&usqp=CAU'></img>
                <img src='https://thumbs.dreamstime.com/b/luxurious-golden-pink-marble-texture-vector-abstract-shiny-pattern-elegant-design-light-background-cover-gold-wallpaper-226351943.jpg'></img>
                <img src='https://img.freepik.com/premium-vector/marble-texture-background-pastel-colors_56745-117.jpg'></img>
                <img src='https://img.freepik.com/premium-vector/soft-pastel-colored-design-marble-texture-background_105555-333.jpg?w=2000'></img>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZZQM9hZl1f_6YwCgytaVzZ9nGXzreYLX2znZGsYSeFjfstOL28_-4Ndfq9NLmBLAzPg&usqp=CAU'></img>

            </div>
        </div>

        </div>
      
    </div>
  )
}

export default Profile
