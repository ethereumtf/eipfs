import React, {Component} from 'react';
import {convertBytes} from './helpers';
import moment from 'moment'

class Main extends Component {

    render() {
        return (
            <div className="container-fluid mt-5 text-center">
                <div className="row justify-content-center">
                    <div className="container-fluid">
                        <div className="card p-3 bg-white">
                            <h2 className="text-white bg-white font-italic">
                                Enterprise IPFS
                            </h2>
                            <form
                                className="mb-3"
                                onSubmit={(event) => {
                                    event.preventDefault()
                                    const description = this.fileDescription.value
                                    this.props.uploadFile(description)
                                }}>
                                <input type="file" onChange={this.props.captureFile}
                                       className="bg-white border-0 form-control form-control-lg p-0">
                                </input>
                                <div className="form-group">
                                    <input
                                        id="fileDescription"
                                        type="text"
                                        ref={(input) => {
                                            this.fileDescription = input
                                        }}
                                        className="form-control p-4"
                                        placeholder="Please input description. (Required)"
                                        required/>
                                </div>
                                <button type="submit" className="btn btn-md btn-success"><b>Upload</b></button>
                            </form>
                        </div>
                        <p/>
                        <div className="table-responsive">
                            <table className="table table-light shadow-lg table-striped">
                                <thead className="thead-white shadow-lg">
                                <tr className="">
                                    <th scope="col">Id</th>
                                    <th scope="col">Hash</th>
                                    <th scope="col">Owner</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Date</th>


                                </tr>
                                </thead>
                                {this.props.files.map((file, key) => {
                                    return (
                                        <thead key={key}>
                                        <tr className="shadow-sm">
                                            <td>{file.fileId}</td>
                                            <td>
                                                <a
                                                    href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                                                    rel="noopener noreferrer"
                                                    target="_blank">
                                                    {file.fileHash}
                                                </a>
                                            </td>
                                            <td>
                                                <a
                                                    href={"https://etherscan.io/address/" + file.uploader}
                                                    rel="noopener noreferrer"
                                                    target="_blank">
                                                    {file.uploader}
                                                </a>
                                            </td>
                                            <td>{file.fileDescription}</td>
                                            <td>{file.fileType}</td>
                                            <td>{convertBytes(file.fileSize)}</td>
                                            <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>


                                        </tr>
                                        </thead>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
