import React from 'react'
import './css/index.css';

function Detail() {
  return (
    <div className='feed-detail'>
        <div className='bg'></div>
        <div className='wrapper'>
            <div className='close'>
                <img src='/assets/feed/close.svg'></img>
            </div>
            <div className='main-image'>

            </div>
            <div className='contents'>
                <div className='feed-content'>
                    <div className='top'>
                        <div className='profile-image'></div>
                        <div className='feed-desc'>
                            <div className='nickname txt-bold'>연수짱</div>
                            <div className='timestamp'>8:15,어제</div>
                        </div>
                    </div>
                    <div className='body'>
                        tifwkdfmkdflskndflsdfsdfsdfsdfOSJDf:OSDjf;
                        aslda;lsdma;lsmd;alskdfafdsdnfkjskjdbfkjad
                    </div>

                    <div className='bottom'>
                        <div className='like'>
                            <div className='asset'>
                            <img src='/assets/feed/like-dac.svg'></img>
                            </div>
                            <div className='title txt-bold'>25k</div>
                        </div>
                        <div className='comment'>
                            <div className='asset'>
                            <img src='/assets/feed/comment.svg'></img>
                            </div>
                            <div className='title txt-bold'>2k</div>
                        </div>
                    </div>
                
                </div>
                <div className='feed-comments'>
                    <div className='comment-form comment'>
                        <div className='top'>
                            <div className='left'>
                            <div className='profile-image'></div>
                                <div className='feed-desc'>
                                <div className='nickname txt-bold'>연수짱</div>
                                <div className='timestamp'>8:15,어제</div>
                        </div>
                            </div>
                            <div className='right'>
                                <div className='like'>
                                    <div className='asset'>
                                    <img src='/assets/feed/like-dac.svg'></img>
                                    </div>
                                    <div className='title txt-bold'>
                                        34K
                                    </div>
                                </div>
                                <div className='reply-btn'>
                                    답글
                                </div>
                            </div>
                        </div>
                        <div className='body'>
                            sdfkmsdkfmskdmfs;ldf;dlfs
                        </div>
                    </div>
                
                    <div className='comment-form reply'>
                        <div className='top'>
                            <div className='left'>
                            <div className='profile-image'></div>
                                <div className='feed-desc'>
                                <div className='nickname txt-bold'>연수짱</div>
                                <div className='timestamp'>8:15,어제</div>
                            </div>
                            </div>
                            <div className='right'>
                                <div className='like'>
                                    <div className='asset'>
                                    <img src='/assets/feed/like-dac.svg'></img>
                                    </div>
                                    <div className='title txt-bold'>
                                        34K
                                    </div>
                                </div>
                                <div className='reply-btn'>
                                    답글
                                </div>
                            </div>
                        </div>
                        <div className='body'>
                            sdfkmsdkfmskdmfs;ldf;dlfs
                        </div>
                    </div>

                    <div className='comment-form comment'>
                        <div className='top'>
                            <div className='left'>
                            <div className='profile-image'></div>
                                <div className='feed-desc'>
                                <div className='nickname txt-bold'>연수짱</div>
                                <div className='timestamp'>8:15,어제</div>
                        </div>
                            </div>
                            <div className='right'>
                                <div className='like'>
                                    <div className='asset'>
                                    <img src='/assets/feed/like-dac.svg'></img>
                                    </div>
                                    <div className='title txt-bold'>
                                        34K
                                    </div>
                                </div>
                                <div className='reply-btn'>
                                    답글
                                </div>
                            </div>
                        </div>
                        <div className='body'>
                            sdfkmsdkfmskdmfs;ldf;dlfs
                        </div>
                    </div>

                    <div className='comment-form comment'>
                        <div className='top'>
                            <div className='left'>
                            <div className='profile-image'></div>
                                <div className='feed-desc'>
                                <div className='nickname txt-bold'>연수짱</div>
                                <div className='timestamp'>8:15,어제</div>
                        </div>
                            </div>
                            <div className='right'>
                                <div className='like'>
                                    <div className='asset'>
                                    <img src='/assets/feed/like-dac.svg'></img>
                                    </div>
                                    <div className='title txt-bold'>
                                        34K
                                    </div>
                                </div>
                                <div className='reply-btn'>
                                    답글
                                </div>
                            </div>
                        </div>
                        <div className='body'>
                            sdfkmsdkfmskdmfs;ldf;dlfs
                        </div>
                    </div>
                </div>
                <div className='feed-write-comment'>
                    <div className='profile-image'>

                    </div>
                    <div className='write-comment'>
                        <input type='text' placeholder='댓글을 남겨주세요'></input>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Detail
