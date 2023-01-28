import CardImage from "@/components/atoms/CardImage";
import Icon from "@/components/atoms/Icon";
import TextParagraph from "@/components/atoms/TextParagraph";
import CardContent from "@/components/molecules/CardContent";
import api from "@/components/services/api";
import LayoutBase from "@/components/templates/LayoutBase";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import * as S from './styles'

const Info = () => {
    const [infoPerson, setInfoPerson] = useState([])
    const [filterSearch, setFilterSearch] = useState<any>()
    const [idPerson, setIdPerson] = useState<any>()
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setFilterSearch(localStorage?.getItem('person'))
            setIdPerson(localStorage.getItem('id'));
        }
    }, [])
        
    const searchInfo = useCallback(() => {
        api.get(`/characters/${idPerson}`)
        .then((response) => {
            setInfoPerson(response?.data?.data?.results);
        }).catch();
    }, [idPerson !== undefined])

    useEffect(() => {
        if(idPerson !== undefined) {
            searchInfo()
        }
    },[idPerson])

        // useEffect(() => {
        //     axios.get(baseURL)
        //         .then((response) => {
        //             setInfoPerson(response?.data?.data?.results);
        //         }).catch();
        // }, [idPerson !== undefined])

    return (
        <LayoutBase>
            <S.ContentInfo>
                <S.ComeBack onClick={() => router.push(`/person?character=${filterSearch}`)}>
                    <Icon type="back" text="Return" typeParagraph="h4" />
                </S.ComeBack>
                {infoPerson &&
                    infoPerson.map((person: any, index: any) => {
                        return (
                            <S.Column key={index}>
                                <S.ContentPerson>
                                    <CardImage width={300} url={`${person.thumbnail.path}.${person.thumbnail.extension}`} />
                                    <S.Description>
                                        <TextParagraph text={person.name} type="h2" />
                                        <TextParagraph text={person.description ? person.description : 'There is no description...'} type="h5" />
                                    </S.Description>
                                </S.ContentPerson>
                                <S.Appearances>
                                    <CardContent noBorder>
                                        <TextParagraph text='Comics' type="h2" bold />
                                        <S.UlCategory>
                                            {person.comics.items.length !== 0 ? person.comics.items.map((comic: any, index: string) => {
                                                return (
                                                    <S.LiCategory key={index}>
                                                        {index + 1}- {comic.name}
                                                    </S.LiCategory>
                                                )
                                            })
                                                :
                                                <S.LiCategory>
                                                    No info
                                                </S.LiCategory>
                                            }
                                        </S.UlCategory>
                                    </CardContent>
                                    <CardContent noBorder>
                                        <TextParagraph text='Events' type="h2" bold />
                                        <S.UlCategory>
                                            {person.events.items.length !== 0 ? person.events.items.map((event: any, index: string) => {
                                                return (
                                                    <S.LiCategory key={index}>
                                                        {index + 1}- {event.name}
                                                    </S.LiCategory>
                                                )
                                            })
                                                :
                                                <S.LiCategory>
                                                    No info
                                                </S.LiCategory>
                                            }
                                        </S.UlCategory>
                                    </CardContent>
                                    <CardContent noBorder>
                                        <TextParagraph text='Series' type="h2" bold />
                                        <S.UlCategory>
                                            {person.series.items.length ? person.series.items.map((serie: any, index: string) => {
                                                return (
                                                    <S.LiCategory key={index}>
                                                        {index + 1}- {serie.name}
                                                    </S.LiCategory>
                                                )
                                            })
                                                :
                                                <S.LiCategory>
                                                    No info
                                                </S.LiCategory>
                                            }
                                        </S.UlCategory>
                                    </CardContent>
                                    <CardContent noBorder>
                                        <TextParagraph text='Stories' type="h2" bold />
                                        <S.UlCategory>
                                            {person.stories.items.length ? person.stories.items.map((storie: any, index: string) => {
                                                return (
                                                    <S.LiCategory key={index}>
                                                        {index + 1}- {storie.name}
                                                    </S.LiCategory>
                                                )
                                            })
                                                :
                                                <S.LiCategory>
                                                    No info
                                                </S.LiCategory>
                                            }
                                        </S.UlCategory>
                                    </CardContent>
                                </S.Appearances>
                            </S.Column>
                        )
                    })}
            </S.ContentInfo>
        </LayoutBase>
    );
};

export default Info