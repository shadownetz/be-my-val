"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {db} from "./config/firebase.ts";
import bmvVideo from "./assets/bmv.mp4";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [nextStep, setNextStep] = useState(false);
  const [name, setName] = useState('Amaka my love ❤️ 🥰 😍');
  const [note, setNote] = useState('');
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    handleClick('No')
    setNoCount(noCount + 1);
  };
  const handleYesClick = ()=>{
    handleClick('Yes')
    setYesPressed(true)
  }
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  const handleClick = async (decision:string) => {
    await addDoc<Record<string, any>, any>(collection(db, "myVals"), {
      name,
      note,
      decision,
      createdAt: new Date()
    });
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={bmvVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <section className="w-full max-w-xl rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-md sm:p-8">
          {nextStep ? (
            <>
              {yesPressed ? (
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                    className="h-44 w-44 rounded-2xl object-cover"
                  />
                  <div className="mt-5 text-3xl font-bold sm:text-4xl">WOOOOOO!!! I love you pookie!! ;))</div>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <img
                    className="h-44 w-44 rounded-2xl object-cover"
                    src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                  />
                  <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                    {name.toUpperCase()} will you be my Valentine?
                  </h1>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <button
                      className="rounded-xl bg-emerald-500 px-5 py-3 font-bold text-white transition hover:bg-emerald-600"
                      style={{ fontSize: yesButtonSize }}
                      onClick={handleYesClick}
                    >
                      Yes
                    </button>
                    <button
                      onClick={handleNoClick}
                      className="rounded-xl bg-rose-500 px-5 py-3 font-bold text-white transition hover:bg-rose-600"
                    >
                      {noCount === 0 ? "No" : getNoButtonText()}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col gap-4">
              <h1 className="text-center text-3xl font-semibold sm:text-4xl">A little Valentine form</h1>
              <p className="text-center text-sm text-white/80">Enter your name and leave a sweet note.</p>
              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-white/30 bg-white/90 p-3 text-slate-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-300"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
              <textarea
                placeholder="Leave a special Valentine note for me 😍"
                className="min-h-32 rounded-xl border border-white/30 bg-white/90 p-3 text-slate-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-300"
                value={note}
                onChange={(e)=>setNote(e.target.value)}
              />
              <button
                type="button"
                disabled={!name.trim()}
                className="rounded-xl bg-pink-500 p-3 font-semibold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-60"
                onClick={()=>setNextStep(true)}
              >
                ❤️ Submit ❤️
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
