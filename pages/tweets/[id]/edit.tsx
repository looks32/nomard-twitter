import { useForm } from 'react-hook-form';
//import Input from '../../../components/input';
import Layout from '../../../components/layout';
import TextArea from '../../../components/textarea';
import Button from '../../../components/button';
import useMutation from '../../../libs/client/useMutation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface EditTweetForm {
  contents: string | string[];
  url: string | string[];
}

interface EditTweetMutation {
  ok: boolean;
  message?: string;
}

const EditTweet = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditTweetForm>();
  const [edit, { loading, data }] =
    useMutation<EditTweetMutation>(
      `/api/tweets/${router.query.id}/edit`,
    );

  const onValid = ({ contents, url }: EditTweetForm) => {
    if (loading) return;

    edit({ contents, url });
  };

  useEffect(() => {
    if (!router.query) return;
    const {
      query: { contents, url },
    } = router;
    if (contents) setValue('contents', contents);
    if (url) setValue('url', url);
  }, [router, setValue]);

  useEffect(() => {
    if (data && data?.ok) {
      router.push(`/tweets/${router.query.id}`);
    }
  }, [data]);
  return (
    <Layout title='트윗 수정하기'>
      <Head>
        <title>트윗수정</title>
      </Head>
      <div className='px-4 pt-4 space-y-4 w-full'>
        <form
          className='space-y-4'
          onSubmit={handleSubmit(onValid)}
        >
          <TextArea
            register={register('contents', {
              required: true,
            })}
            name='contents'
            label='내용'
          />
          <div className='pt-4'>
            <Button text='트윗하기' large={true} />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditTweet;
