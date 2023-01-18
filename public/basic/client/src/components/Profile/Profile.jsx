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
        <div className='profile-contents'>
            <div className='feed-list'>

            <div className='feed'>
            <div className='top'>
            <div className='profile-image'></div>
            <div className='profile-desc'>
            <div className='nickname txt-bold'>연수짱</div>
            <div className='timestamp'>
                11시 11분,어제
            </div>
            </div>
            </div>
            <div className='contents'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem magni et voluptatem, quas eum consequuntur iste ipsam quam ad iure error blanditiis incidunt consectetur neque exercitationem possimus ducimus reprehenderit!
            </div>
            <div className='bottom'>
             <div className='like'>
                <div className='asset'>
                    <img src='/assets/feed/like-dac.svg'></img>
                </div>
                <div className='count txt-bold'>
                    25K
                </div>
             </div>
             <div className='comment'>
                <div className='asset'>
                <img src='/assets/feed/comment.svg'></img>
                </div>
                <div className='count txt-bold'>2K</div>
             </div>
            </div>

        </div>
        <div className='feed'>
            <div className='top'>
            <div className='profile-image'></div>
            <div className='profile-desc'>
            <div className='nickname txt-bold'>연수짱</div>
            <div className='timestamp'>
                11시 11분,어제
            </div>
            </div>
            </div>
            <div className='contents'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem magni et voluptatem, quas eum consequuntur iste ipsam quam ad iure error blanditiis incidunt consectetur neque exercitationem possimus ducimus reprehenderit!
            </div>
            <div className='bottom'>
             <div className='like'>
                <div className='asset'>
                    <img src='/assets/feed/like-dac.svg'></img>
                </div>
                <div className='count txt-bold'>
                    25K
                </div>
             </div>
             <div className='comment'>
                <div className='asset'>
                <img src='/assets/feed/comment.svg'></img>
                </div>
                <div className='count txt-bold'>2K</div>
             </div>
            </div>

        </div>
        <div className='feed'>
            <div className='top'>
            <div className='profile-image'></div>
            <div className='profile-desc'>
            <div className='nickname txt-bold'>연수짱</div>
            <div className='timestamp'>
                11시 11분,어제
            </div>
            </div>
            </div>
            <div className='contents'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem magni et voluptatem, quas eum consequuntur iste ipsam quam ad iure error blanditiis incidunt consectetur neque exercitationem possimus ducimus reprehenderit!
            </div>
            <div className='bottom'>
             <div className='like'>
                <div className='asset'>
                    <img src='/assets/feed/like-dac.svg'></img>
                </div>
                <div className='count txt-bold'>
                    25K
                </div>
             </div>
             <div className='comment'>
                <div className='asset'>
                <img src='/assets/feed/comment.svg'></img>
                </div>
                <div className='count txt-bold'>2K</div>
             </div>
            </div>

        </div>
        <div className='feed'>
            <div className='top'>
            <div className='profile-image'></div>
            <div className='profile-desc'>
            <div className='nickname txt-bold'>연수짱</div>
            <div className='timestamp'>
                11시 11분,어제
            </div>
            </div>
            </div>
            <div className='contents'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem magni et voluptatem, quas eum consequuntur iste ipsam quam ad iure error blanditiis incidunt consectetur neque exercitationem possimus ducimus reprehenderit!
            </div>
            <div className='bottom'>
             <div className='like'>
                <div className='asset'>
                    <img src='/assets/feed/like-dac.svg'></img>
                </div>
                <div className='count txt-bold'>
                    25K
                </div>
             </div>
             <div className='comment'>
                <div className='asset'>
                <img src='/assets/feed/comment.svg'></img>
                </div>
                <div className='count txt-bold'>2K</div>
             </div>
            </div>

        </div>
        

            <div className='feed'>
                <div className='top'>
                    <div className='profile-image'></div>
                    <div className='profile-desc'>
                        <div className='nickname txt-bold'>연수짱</div>
                        <div className='timestamp'>
                            11시 11분,어제
                        </div>
                    </div>
                </div>
                <div className='contents'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem magni et voluptatem, quas eum consequuntur iste ipsam quam ad iure error blanditiis incidunt consectetur neque exercitationem possimus ducimus reprehenderit!
                    <div className='image'></div>
                </div>
                <div className='bottom'>
                    <div className='like'>
                        <div className='asset'>
                            <img src='/assets/feed/like-dac.svg'></img>
                        </div>
                        <div className='count txt-bold'>
                            25K
                        </div>
                    </div>
                    <div className='comment'>
                        <div className='asset'>
                            <img src='/assets/feed/comment.svg'></img>
                        </div>
                        <div className='count txt-bold'>2K</div>
                    </div>
                 </div>
            </div>

        </div>
            
            <div className='profile-info-desc'>
                <div className='desc'>
                    <div className='title txt-bold'>
                        좋아요
                    </div>
                    <div className='count'>
                        739,000
                    </div>
                </div>

                <div className='desc'>
                    <div className='title txt-bold'>
                        팔로워
                    </div>
                    <div className='count'>
                        2438
                    </div>
                </div>
                <div className='desc'>
                    <div className='title txt-bold'>
                        포스트
                    </div>
                    <div className='count'>
                        320
                    </div>
                </div>
                <div className='desc'>
                    <div className='title txt-bold'>
                        친구
                    </div>
                    <div className='count'>
                        739,000
                    </div>
                </div>
                
            </div>
            </div>

        </div>

        </div>
      
    
  )
}

export default Profile
