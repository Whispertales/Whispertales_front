import React, { useState, useRef } from 'react';

export default function Voice() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        audioChunksRef.current = [];
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing media devices.', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <>
      <p>錄音</p>
      <button onClick={startRecording} disabled={isRecording}>
        開始錄音
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        結束錄音
      </button>
      {audioUrl && <audio src={audioUrl} controls />}
      <p><b>範例文本</b></p>
      <p>有一對心地善良的老公公和老婆婆,在鎮上開了一家皮鞋店,他們把賺來的大部分錢都拿去救濟比他們還要貧窮的人。聖誕節快到了,老公公做了一雙小紅鞋,打算用賣掉它的錢來過聖誕節。但是那雙鞋後來卻送給了一位貧窮的小女孩。隔天,老公公用所剩的皮革做了一雙鞋底。有一群小矮人在老公公和老婆婆睡著後,悄悄地帶來了皮革,並利用老公公做好的鞋底,做了一雙鞋後才離開。老公公醒來,看到那雙鞋子,很訝異地說:「這雙鞋怎麼跟我想要做的一樣呢?」那雙鞋子很快就賣出去了,他們又把賣鞋的錢拿去救助一個可憐的老婆婆。那天晚上,小矮人又來了,他們持續做了好多雙鞋子。老公公做的鞋子賣得非常好,老公公和老婆婆仍舊把賣鞋子的錢拿去救濟貧苦的人。有一次半夜醒來的老婆婆發現一群沒有穿衣服的小矮人,正忙著做鞋子。天亮後,老婆婆就把這件事告訴了老公公,說:「他們沒穿衣服的話,會感冒的啊。」老公公和老婆婆商量之後,決定用剩下的布和皮革來幫小矮人們做衣服和鞋子。他們把做好的衣服和鞋子排在工作的地方後,才上床去睡覺。半夜裡來工作的小矮人發現了那些漂亮的衣服和鞋子,都很高興。聖誕節終於到了,老公公和老婆婆幫鄰人們佈置了一棵聖誕樹,並準備了許多好吃的點心。老夫妻倆讓小矮人們度過一個快樂的聖誕節,那天以後小矮人就再也不曾出現過了,而老公公所做的鞋子卻越賣越好。於是他們有了更多的錢來幫助貧窮的人,生活也越來越快樂了。</p>
    </>
  );
}
