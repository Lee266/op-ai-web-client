import { getAccessToken } from '@auth0/nextjs-auth0';
import axios, { AxiosRequestConfig } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const AiApiServerName = process.env.BACK_AI_BASE_URL;
  const { accessToken } = await getAccessToken();
  const token = `Bearer ${accessToken}`;
  const model = req.nextUrl.searchParams.get('model') || 'vit';
  const url = `${AiApiServerName}/ai/mnist/${model}`;

  const formData = await req.formData();
  const config: AxiosRequestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: token,
    },
  };
  const resData = await axios
    .post(url, formData, config)
    .then((response) => {
      return { data: response.data, status: response.status };
    })
    .catch((e) => {
      return { data: e.response.data, status: e.response.status };
    });

  return NextResponse.json(resData.data, { status: resData.status });
}
