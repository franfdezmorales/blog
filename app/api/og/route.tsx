import { host } from '@utils';
import { ImageResponse } from 'next/og'

export const runtime = 'edge';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const postTitle = searchParams.get('title');
    const bufferFont = fetch(
        new URL('../../../public/fonts/Geist-Regular.ttf', import.meta.url)
    ).then(res => res.arrayBuffer());
    const fontData = await bufferFont;

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    backgroundImage: `url(${host()}/utility/og-background.jpeg)`
                }}
            >
                <div
                    style={{
                        maxWidth: '60%',
                        marginLeft: 190,
                        marginRight: 190,
                        display: 'flex',
                        fontSize: 130,
                        fontFamily: 'Geist',
                        letterSpacing: '-0.05em',
                        fontStyle: 'normal',
                        color: 'white',
                        lineHeight: '120px',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {postTitle}
                </div>
            </div>
        ),
        {
            width: 1920,
            height: 1080,
            fonts: [
                {
                    name: 'Geist',
                    data: fontData,
                    style: 'normal',
                },
            ],
        }
    );
}