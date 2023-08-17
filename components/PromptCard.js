'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import copy from './../assets/icons/copy.svg';
import tick from './../assets/icons/tick.svg';

import React from 'react';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState('');
  const { data: session } = useSession();

  const pathName = usePathname();
  const router = useRouter();

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push('/profile');

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied('');
    }, 3000);
  };

  return (
    <div className='prompt_card'>
      <div className='flex items-start justify-between gap-5'>
        <div
          className='flex items-center justify-start flex-1 gap-3 cursor-pointer'
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='object-contain rounded-full'
          ></Image>
          <div className='flex flex-col'>
            <h3 className='font-semibold text-gray-900 font-satoshi'>
              {post.creator.username}
            </h3>
            <p className='text-sm text-gray-500 font-inter'>
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={copied === post.prompt ? tick : copy}
            alt='user_image'
            width={12}
            height={12}
            className=''
          ></Image>
        </div>
      </div>

      <p className='my-4 text-sm text-gray-700 font-satoshi'>{post.prompt}</p>
      <p
        className='text-sm cursor-pointer font-inter blue_gradient'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className='gap-4 pt-3 mt-5 border-t border-gray-100 flex-center'>
          <p
            className='text-sm cursor-pointer font-inter green_gradient'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='text-sm cursor-pointer font-inter orange_gradient'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
