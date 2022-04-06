import './index.css';
import React from 'react';

import { FaAngleRight } from "react-icons/fa";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(-1, 1), Move(), Sticky());

export default function ProjectModel1() {
 return (
    <section className='containerProject' id='projects'>
        <Animator animation={batch(Fade(-1, 1), MoveIn(-200, 0))}>
        <div className='boxProject'>

        </div>
        </Animator>
        <Animator animation={batch(Fade(-1, 1), MoveIn(200, 0))}>
        <div className='containerTextProject'>
            <span className='textHeaderProject'>Projeto 1</span>
            <span className='textTitleProject'>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam nec nisi dictum, dignissim ante
            eget, aliquet turpis.
            </span>
            <a className='textReadMore' href="#">Ler mais<FaAngleRight /></a>
            <span className='textTools'>Ferramentas utilizadas:</span>
            <ul className='tools'>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
        <div className='containerButtons'>
            <button className='button'></button>
            <button className='button'></button>
        </div>
        </Animator>
    </section>
 );
}