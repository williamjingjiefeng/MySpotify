import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { ISong, ISinger, IAlbum, IErrors } from "../../redux/dispatch/Music/PreferenceState";

interface ISongForm {
    song: ISong;
    singers: ISinger[];
    albums: IAlbum[];
    onSave: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    saving: boolean;
    errors: IErrors;
}

const SongForm = ({
    song,
    singers,
    albums,
    onSave,
    onChange,
    saving = false,
    errors,
}: ISongForm) => {
    return (
        <form onSubmit={onSave}>
            <h2>{song.id ? "Edit" : "Add"} Song</h2>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}
            <TextInput
                name="title"
                label="Title"
                value={song.title}
                onChange={onChange}
                error={errors.title}
            />

            <SelectInput
                name="singerId"
                label="Singer"
                value={song.singerId || ""}
                defaultOption="Select Singer"
                options={singers.map((singer) => ({
                    value: singer.id,
                    text: singer.name,
                }))}
                onChange={onChange}
                error={errors.singer}
            />

            <TextInput
                name="youtubeId"
                label="Youtube ID"
                value={song.youtubeId}
                onChange={onChange}
                error={errors.youtubeId}
            />

            <SelectInput
                name="albumId"
                label="Album"
                value={song.albumId || ""}
                defaultOption="Select Album"
                options={albums.map((album) => ({
                    value: album.id,
                    text: album.name,
                }))}
                onChange={onChange}
                error={errors.album}
            />

            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Saving..." : "Save"}
            </button>
        </form>
    );
};

export default SongForm;
