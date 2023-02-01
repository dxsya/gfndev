import React, { Component, useEffect, useRef, useState } from 'react'
import WaitingVideo from './utils/waiting.mp4'
import './main.css'
import Body from './Body'

export function Waiting() {
	const videoRef = useRef(null)
	const [hideVideo, setHideVideo] = useState(false)
	useEffect(() => {
		setTimeout(() => setHideVideo(true), 9000)
	}, [])
	useEffect(() => {
		const video = videoRef.current
		video.currentTime = 0
		video.play()
		setTimeout(() => {
			video.pause()
		}, 9000)
	}, [])
	{
		return (
			<div className='waiting-video' style={{ display: hideVideo ? 'none' : 'block' }}>
				<video ref={videoRef} autoPlay muted id='waitingVideo'>
					<source src={WaitingVideo} type='video/mp4' />
				</video>
			</div>
		)
	}
}
