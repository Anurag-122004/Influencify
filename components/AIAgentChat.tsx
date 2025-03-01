"use client";
import { useChat } from '@ai-sdk/react';
import { Button } from './ui/button';

function AIAgentChat({videoId}: {videoId: string}) {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        maxSteps:5,
        body: {
            videoId,
        },
    });

  return (
    <div className='flex flex-col h-full'>
        <div className='hidden lg:block px-4 pb-3 border-b border-gray-200'>
            <h2 className='text-lg font-semibold text-gray-800'>
                AI Agent Chat
            </h2>
        </div>

        {/* Messages */}
        <div className='flex-1 overflow-y-auto px-4 py-4'>
            <div className='space-y-6'>
                {messages.length === 0 && (
                    <div className='flex items-center justify-center h-full min-h-[200px]'>
                        <div className='text-center space-y-2'>
                            <h3 className='text-lg font-medium text-gray-700'>
                                Welcome to AI Agent Chat
                            </h3>
                            <p className='text-sm text-gray-500'>Ask any questions about your content.</p>
                        </div>
                    </div>
                )}

                {messages.map((m) => (
                    <div key={m.id}>
                        <p>{m.content}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* input form */}
        <div className='border-t border-gray-100 p-4 bg-white'>
            <div className='space-y-3'>
                <form onSubmit={handleSubmit} className='flex gap-2'>
                    <input type="text"
                        placeholder='Enter your question?'
                        className='flex-1 w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300'
                        value={input}
                        onChange={handleInputChange}
                    />
                    <Button type='submit' className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium'>Send</Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AIAgentChat