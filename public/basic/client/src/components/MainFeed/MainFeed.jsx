import React from 'react'
import './css/index.css';

function MainFeed() {
  return (
    <div className='mainfeed'>
      <div className='wrapper'>
        <div className='feed-list'>
            <div className='write-feed'>
                <div className='profile-image'></div>
                <div className='inp'>
                    <input type='text' placeholder='오늘 무슨일이 있었나요?'></input>
                </div>
                <div className='get-image'>
                    <label htmlFor='get-image-input'>
                        <img src='/assets/main/add-image.svg'></img>
                    </label>
                    <input id='get-image-input' type='file'></input>
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
        <div className='friends-list'>
            <div className='my-profile'>
                <div className='profile-image'>

                </div>
                <div className='nickname txt-bold'>연수</div>
            </div>
            <div className='my-friends'>
                <div className='title txt-bold'>나의친구</div>
                <ul className='friend-list-wrapper'>
                    <li className='friend'>
                        <div className='profile-image'></div>
                        <div className='nickname txt-bold'>
                            윤환
                        </div>
                    </li>
                    <li className='friend'>
                        <div className='profile-image'></div>
                        <div className='nickname txt-bold'>
                            윤환
                        </div>
                    </li>
                    <li className='friend'>
                        <div className='profile-image'></div>
                        <div className='nickname txt-bold'>
                            윤환
                        </div>
                    </li>
                    <li className='friend'>
                        <div className='profile-image'></div>
                        <div className='nickname txt-bold'>
                            윤환
                        </div>
                    </li>
                    <li className='friend'>
                        <div className='profile-image'></div>
                        <div className='nickname txt-bold'>
                            윤환
                        </div>
                    </li>
                    <li className='friend'>
                        <div className='profile-image'></div>
                        <div className='nickname txt-bold'>
                            윤환
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default MainFeed
